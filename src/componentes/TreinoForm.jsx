import React, { useState, useEffect, useCallback } from "react";
import {
  EditSection,
  FormGroup,
  SaveButton,
  CancelButton,
  FormWrapper,
  SelectWrapper,
  EditIndicator,
  ButtonContainer,
} from "../styles/TreinoFrom.styles";
import { useTheme } from "styled-components";

const TreinoForm = ({ onSubmit, treinoEdit, setTreinoEdit }) => {
  const theme = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [treino, setTreino] = useState({
    nome: "",
    peso: "",
    repeticao: "12",
    series: "3",
    dia: "Segunda",
  });

  const resetForm = useCallback(() => {
    setTreino({
      nome: "",
      peso: "",
      repeticao: "12",
      series: "3",
      dia: "Segunda",
    });
  }, []);

  useEffect(() => {
    if (treinoEdit) {
      setTreino(treinoEdit);
      setTimeout(() => {
        document.querySelector('input[name="nome"]')?.focus();
      }, 100);
    }
  }, [treinoEdit]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && treinoEdit) {
        handleCancel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [treinoEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "peso" || name === "repeticao" || name === "series") {
      const numericValue = Math.max(0, Number(value) || 0);
      setTreino(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setTreino(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!treino.nome.trim() || !treino.repeticao || !treino.series) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      await onSubmit(treino);
      if (!treinoEdit) {
        resetForm();
      }
    } catch (error) {
      console.error("Erro ao salvar treino:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setTreinoEdit(null);
    resetForm();
  };

  return (
    <FormWrapper>
      <EditSection>
        {treinoEdit && <EditIndicator>EDITANDO TREINO</EditIndicator>}
        <h2>{treinoEdit ? "Editar Treino" : "Adicionar Treino"}</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <input
              type="text"
              name="nome"
              placeholder="Nome do exercício"
              value={treino.nome}
              onChange={handleChange}
              required
              autoFocus={!!treinoEdit}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              name="peso"
              placeholder="Peso em kg (opcional)"
              value={treino.peso}
              onChange={handleChange}
              min="0"
              step="0.5"
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              name="repeticao"
              placeholder="Número de repetições"
              value={treino.repeticao}
              onChange={handleChange}
              required
              min="1"
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              name="series"
              placeholder="Número de séries"
              value={treino.series}
              onChange={handleChange}
              required
              min="1"
            />
          </FormGroup>

          <FormGroup>
            <SelectWrapper>
              <select name="dia" value={treino.dia} onChange={handleChange}>
                <option value="Segunda">Segunda-feira</option>
                <option value="Terça">Terça-feira</option>
                <option value="Quarta">Quarta-feira</option>
                <option value="Quinta">Quinta-feira</option>
                <option value="Sexta">Sexta-feira</option>
              </select>
            </SelectWrapper>
          </FormGroup>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
           < ButtonContainer>
            <SaveButton 
              type="submit" 
              disabled={isSubmitting || !treino.nome.trim()}
            >
              {isSubmitting ? "Salvando..." : 
               (treinoEdit ? "Salvar Alterações" : "Adicionar Treino")}
            </SaveButton>

            {treinoEdit && (
              <CancelButton 
                type="button" 
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                Cancelar
              </CancelButton>
            )}
            </ButtonContainer>
          </div>
        </form>
      </EditSection>
    </FormWrapper>
  );
};

export default TreinoForm;