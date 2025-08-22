import React from "react";
import {
  TreinoCard,
  TreinoInfo,
  ActionButtons,
  EditButton,
  RemoveButton,
  TreinoHeader,
  TreinoStats,
  StatItem,
  IconWrapper
} from "../styles/TreinoItem.styles";

const TreinoItem = ({ treino, onEdit, onDelete, isDeleting = false }) => {
  return (
    <TreinoCard>
      <TreinoHeader>
        <h3>{treino.nome}</h3>
        <span className="material-icons">fitness_center</span>
      </TreinoHeader>
      
      <TreinoInfo>
        <TreinoStats>
          <StatItem>
            <IconWrapper>🏋️</IconWrapper>
            <div>
              <span className="label">Peso</span>
              <span className="value">{treino.peso || 0}kg</span>
            </div>
          </StatItem>
          
          <StatItem>
            <IconWrapper>🔄</IconWrapper>
            <div>
              <span className="label">Repetições</span>
              <span className="value">{treino.repeticao}</span>
            </div>
          </StatItem>
          
          <StatItem>
            <IconWrapper>📊</IconWrapper>
            <div>
              <span className="label">Séries</span>
              <span className="value">{treino.series}</span>
            </div>
          </StatItem>
        </TreinoStats>
      </TreinoInfo>
      
      <ActionButtons>
        <EditButton 
          onClick={() => onEdit(treino)}
          title="Editar treino"
        >
          <span className="material-icons">edit</span>
          <span className="button-text">Editar</span>
        </EditButton>
        
        <RemoveButton 
          onClick={() => onDelete(treino.id)}
          disabled={isDeleting}
          title={isDeleting ? "Removendo..." : "Remover treino"}
        >
          <span className="material-icons">
            {isDeleting ? "hourglass_empty" : "delete"}
          </span>
          <span className="button-text">
            {isDeleting ? "Removendo..." : "Remover"}
          </span>
        </RemoveButton>
      </ActionButtons>
    </TreinoCard>
  );
};

export default TreinoItem;