import React, { useState, useEffect } from "react";
import {
  EditSection,
  FormGroup,
  SaveButton,
  CancelButton,
  FormWrapper,
  SelectWrapper,
} from "../styles/TreinoFrom.styles";
import { useTheme } from "styled-components";

const TreinoForm = ({ onSubmit, treinoEdit, setTreinoEdit }) => {
  const theme = useTheme();
  const [treino, setTreino] = useState({
    nome: "",
    peso: "",
    repeticao: "",
    series: "",
    dia: "Segunda",
  });

  useEffect(() => {
    if (treinoEdit) {
      setTreino(treinoEdit);
    }
  }, [treinoEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTreino({ ...treino, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(treino);
    if (!treinoEdit) {
      setTreino({
        nome: "",
        peso: "",
        repeticao: "",
        series: "",
        dia: "Segunda",
      });
    }
  };

  const handleCancel = () => {
    setTreinoEdit(null);
    setTreino({
      nome: "",
      peso: "",
      repeticao: "",
      series: "",
      dia: "Segunda",
    });
  };

  return (
    <FormWrapper>
      <EditSection>
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
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              name="peso"
              placeholder="Peso (kg)"
              value={treino.peso}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              name="repeticao"
              placeholder="Repetições"
              value={treino.repeticao}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              name="series"
              placeholder="Séries"
              value={treino.series}
              onChange={handleChange}
              required
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

          <SaveButton type="submit">
            {treinoEdit ? "Salvar Alterações" : "Adicionar Treino"}
          </SaveButton>

          {treinoEdit && (
            <CancelButton type="button" onClick={handleCancel}>
              Cancelar
            </CancelButton>
          )}
        </form>
      </EditSection>
    </FormWrapper>
  );
};

export default TreinoForm;
