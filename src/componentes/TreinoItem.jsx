import React from "react";
import {
  TreinoCard,
  TreinoInfo,
  ActionButtons,
  EditButton,
  RemoveButton,
} from "../styles/TreinoItem.styles";
const TreinoItem = ({ treino, onEdit, onDelete }) => {
  return (
    <TreinoCard>
      <h3>{treino.nome}</h3>
      <TreinoInfo>
        <p>Peso: {treino.peso}kg</p>
        <p>Repetições: {treino.repeticao}</p>
        <p>Séries: {treino.series}</p>
      </TreinoInfo>
      <ActionButtons>
        <EditButton onClick={() => onEdit(treino)}>Editar</EditButton>
        <RemoveButton onClick={() => onDelete(treino.id)}>Remover</RemoveButton>
      </ActionButtons>
    </TreinoCard>
  );
};

export default TreinoItem;
