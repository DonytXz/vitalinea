import React from "react";
import {
  NutrimentalContainer,
  NutrimentalTitle,
  Paragraph,
  NutrimentalContent,
  NutrimentalTable,
  NutrimentalTableTitle,
  NutrimentalTableValue,
  NutrimentalItemContainer,
} from "./Nutrimental.elements";
import { nutrimentals } from "data/nutrimental";

const TableItem = (props) => {
  const { item } = props;
  console.log(props.item);
  return (
    <>
      <NutrimentalItemContainer>
        <NutrimentalTableTitle>{item.name}</NutrimentalTableTitle>
        <NutrimentalTableValue>{item.value}</NutrimentalTableValue>
      </NutrimentalItemContainer>
    </>
  );
};

const Nutrimental = () => {
  return (
    <>
      <NutrimentalContainer>
        <NutrimentalContent>
          <NutrimentalTitle>Información nutrimental</NutrimentalTitle>
          <Paragraph fontW="bold">
            Vitalínea® Bebible Guayaba 217gr Valor promedio por porción de 217gr
            Porciones por envase: 1
          </Paragraph>
          <Paragraph fontW="bold">Ingredientes:</Paragraph>
          <Paragraph>
            Ingredientes: Leche descremada pasteurizada y/o reconstituida
            pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K
            y sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina
            y cultivos lácticos.
          </Paragraph>
        </NutrimentalContent>
        <NutrimentalTable>
          {nutrimentals.map((item, index) => {
            return <TableItem key={index} item={item} />;
          })}
        </NutrimentalTable>
      </NutrimentalContainer>
    </>
  );
};

export default Nutrimental;
