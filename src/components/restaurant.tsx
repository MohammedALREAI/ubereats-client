import { Maybe } from "graphql/jsutils/Maybe";
import React from "react";
import { Link } from "react-router-dom";

export interface IRestaurantProps {
  id: string;
  coverImg: string;
  name: string;
  categoryName?: Maybe<string>;
}

export const Restaurant: React.FC<IRestaurantProps> = ({
  id,
  coverImg,
  name,
  categoryName,
}) => (
  <Link to={`/restaurants/${id}`}>
    <div className="flex flex-col">
      <div
        style={{ backgroundImage: `url(${coverImg})` }}
        className="bg-cover bg-center mb-3 py-28"
      ></div>
      <h3 className="text-xl">{name}</h3>
      <span className="border-t mt-2 py-2 text-xs opacity-50 border-gray-400">
        {categoryName}
      </span>
    </div>
  </Link>
);



// function compare (version1:string,version2:string):number{
// let lenV1=version1.length
// let lenV2=version2.length
// let indexV1=0
// let indexV2=0
// while(indexV1<lenV1 ||indexV2<lenV2){
//   let num1=0;
//   let num2=0;
//   while(indexV1<lenV1 &&version1[indexV1]!=='.' ){
//     let curNumberV1= Number(version1[indexV1])-0
//     num1=num1*10+curNumberV1
//     ++indexV1
//   }
//   while(indexV2<lenV2 &&version2[indexV2]!=='.' ){
//     let curNumberV2= Number(version2[indexV2])-0
//     num2=num2*10+curNumberV2
//     ++indexV2
//   }
// if(num1>num2){
//   return 1
// }
// if(num1<num2){
//   return -1
// }
// else{
//   indexV1++;
//   indexV2++;}
  
// }

  

//   return 0

// }