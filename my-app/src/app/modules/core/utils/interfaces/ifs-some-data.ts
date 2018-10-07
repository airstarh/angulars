export interface IfsSomeData {
  [key: string]: string | number | boolean | Array<string | number | IfsSomeData> | IfsSomeData;

  editMode?: boolean;
}

//let x : IfsSomeData = {lala:1, trololo:'yo', arr: [1, 'val', {yo:'hello'}]};
//let x : IfsSomeData = {prop: {}};//error
