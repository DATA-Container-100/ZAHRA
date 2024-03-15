export type Data = {
  details_Img_01: string;
  details_Img_02: string;
  details_Img_03: string;
  details_Img_04: string;
  id: number;
  "main-Img": string;
  nums_of_rooms: string;
  nums_of_toilets: string;
  phone: string;
  place_in_city: string;
  place_in_district: string;
  price: string;
  price_in_details: string;
  property_type: string;
  name: string;
  quote: string;
  total_area: string;
}[];

export type OptionsType = {
  title: string;
  minValue: string;
  maxValue: string;
}[];

export type contactInfoTypes = {
  title: string;
  info_01: string;
  info_02: string;
};

export type SectionHeaderInfo = {
  mainTxt1: string;
  mainTxt2: string;
  subTxt: string;
  imgSrc: string;
};

export type ComProgressive = {
  title: string;
  num: number;
}[];

export type ZahraTeamData = {
  type: string;
  name: string;
  phone: string;
  email: string;
}[];
