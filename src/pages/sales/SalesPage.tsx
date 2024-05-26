import React from "react";
import { SalesTable, SalesTableHeader, Salesstyle } from "../../styles/sales/SalesStyle";
import { ResponsiveBar } from "@nivo/bar";

// 더미데이터
const getData = {
  data: [
    {
      date: "2024.05.18",
      매장: 163,
      매장_건수: 87,
      포장: 176,
      포장_건수: 103,
    },
    {
      date: "2024.05.19",
      매장: 263,
      매장_건수: 134,
      포장: 276,
      포장_건수: 159,
    },
    {
      date: "2024.05.20",
      매장: 163,
      매장_건수: 134,
      포장: 176,
      포장_건수: 159,
    },
    {
      date: "2024.05.21",
      매장: 163,
      매장_건수: 134,
      포장: 176,
      포장_건수: 159,
    },
    {
      date: "2024.05.22",
      매장: 163,
      매장_건수: 134,
      포장: 176,
      포장_건수: 159,
    },
    {
      date: "2024.05.23",
      매장: 163,
      매장_건수: 134,
      포장: 176,
      포장_건수: 159,
    },
    {
      date: "2024.05.24",
      매장: 93,
      매장_건수: 134,
      포장: 206,
      포장_건수: 159,
    },
    {
      date: "2024.05.25",
      매장: 183,
      매장_건수: 134,
      포장: 76,
      포장_건수: 159,
    },
    {
      date: "2024.05.26",
      매장: 233,
      매장_건수: 134,
      포장: 116,
      포장_건수: 159,
    },
    {
      date: "2024.05.27",
      매장: 33,
      매장_건수: 134,
      포장: 216,
      포장_건수: 159,
    },
  ],
};

const SalesLine = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["매장", "포장"]}
    indexBy="date"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.4}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "set3" }}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      // legend: "date",
      // legendPosition: "middle",
      // legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      // legend: "(단위: 만 원)",
      // legendPosition: "end",
      // legendOffset: -40,
      truncateTickAt: 0,
    }}
    enableLabel={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "top-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={e =>
      e.id + ": " + e.formattedValue + " in country: " + e.indexValue
    }
  />
);

const SalesPage = () => {
  return (
    <>
      <Salesstyle>
        <h1>&nbsp;&nbsp;매출 관리</h1>
        <div style={{ width: "100%", height: "500px" }}>
          <p>(단위: 만 원)</p>
          {SalesLine(getData)}
        </div>
        <SalesTableHeader>
          <span>전체 매출</span>
          <span>매장 매출</span>
          <span>포장 매출</span>
        </SalesTableHeader>
        {getData.data.map((item, index) => (
          <SalesTable key={index}>
            <span>{index + 1}.</span>
            <span>{item.date}</span>
            <span>{item.매장 + item.포장}만원({item.매장_건수 + item.포장_건수}건)</span>
            <span>{item.매장}만원({item.매장_건수}건)</span>
            <span>{item.포장}만원({item.포장_건수}건)</span>
          </SalesTable>
        ))}
      </Salesstyle>
    </>
  );
};

export default SalesPage;
