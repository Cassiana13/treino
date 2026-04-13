import { useState, useEffect, useCallback } from "react";
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

const DIAS_SEMANA = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

const FORM_INICIAL = {
  nome: "",
  peso: "",
  repeticao: "12",
  series: "3",
  dia: "Segunda",
};

const TreinoForm = ({ onSubmit, treinoEdit, setTreinoEdit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [treino, setTreino] = useState(FORM_INICIAL);

  const resetForm = useCallback(() => {
    setTreino(FORM_INICIAL);
  }, []);

  const handleCancel = useCallback(() => {
    setTreinoEdit(null);
    resetForm();
  }, [setTreinoEdit, resetForm]);

  useEffect(() => {
    if (treinoEdit) {
      setTreino(treinoEdit);
      setTimeout(() => {
        document.querySelector('input[name="nome"]')?.focus();
      }, 100);
    }
  }, [treinoEdit]);

  // ✅ handleCancel incluído nas dependências
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && treinoEdit) {
        handleCancel();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [treinoEdit, handleCancel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "peso" || name === "repeticao" || name === "series") {
      const numericValue = value === "" ? "" : Math.max(0, Number(value) || 0);
      setTreino((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setTreino((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!treino.nome.trim() || !treino.repeticao || !treino.series) return;

    setIsSubmitting(true);
    try {
      await onSubmit(treino);
      if (!treinoEdit) resetForm();
    } catch (error) {
      console.error("Erro ao salvar treino:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper>
      <EditSection>
        {treinoEdit && <EditIndicator>✏️ Editando treino</EditIndicator>}
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

          <SelectWrapper>
            <select name="dia" value={treino.dia} onChange={handleChange}>
              {DIAS_SEMANA.map((dia) => (
                <option key={dia} value={dia}>
                  {dia === "Sábado" || dia === "Domingo" ? dia : `${dia}-feira`}
                </option>
              ))}
            </select>
          </SelectWrapper>

          <ButtonContainer>
            <SaveButton
              type="submit"
              disabled={isSubmitting || !treino.nome.trim()}
            >
              {isSubmitting
                ? "Salvando..."
                : treinoEdit
                  ? "Salvar Alterações"
                  : "Adicionar Treino"}
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
        </form>
      </EditSection>
    </FormWrapper>
  );
};

export default TreinoForm;
