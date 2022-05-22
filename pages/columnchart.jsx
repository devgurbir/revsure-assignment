import { Column } from '@ant-design/charts';

const ColumnChart = () => {
  const data = [
    {value: 100, x: 0 },
    {value: 90, x: 1 },
    {value: 70, x: 2 },
    {value: 60, x: 3 },
    {value: 35, x: 4 },
    {value: 15, x: 5 },
    {value: 12.5, x: 6 }
  ];

  const config = {
    data,
    xField: 'x',
    yField: 'value',
    seriesField: 'x',
    colorField: "seriesField", 
    color: ({value}) => {
      if(value <= 40 && value > 12.5 ){
        return "#f9b1a2"
      }
      else if(value > 40 && value <= 60){
        return "#a4cd89"
      }
      else if(value > 90){
        return "#f8fafa"
      }
      else{
        return "#e1e1e1"
      }
    },
    meta: {
      value: {
        formatter: (text) => text + "%"
      }
    },
    xAxis: false,
    yAxis: {
      grid: null
    },    
    seriesField: 'value',
    legend: false,
    intervalPadding: 3,
    columnStyle: {
      border: 'solid'
    },
     
  };   
    
  return (
    <div>
        <h2>Column Chart</h2>
        <div style={{padding: "1em"}}>
        <Column {...config} />
        </div>
    </div>
  )
}

export default ColumnChart