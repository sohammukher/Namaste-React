import React from "react";
import  ReactDOM  from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// ----------App Overall Layout-------- 

// Header:
// -Logo
// -Nav Items

// Body:
    // -Search
    // -Restaurant Container
        // 	->Restaurant Card

// Footer:
    // -Copyright
    // -Links
    // -Address
    // -Contact

//---------Component Definations------------------------------------

//Header : Contains the navbar
// Header:
    // -Logo
    // -Nav Items

// -------------------------
// Sample JSON Data

const dataJSON = {
    type : "Indian",
    food :["chai", "dosa"]
};


// const dataObj = {
//     "type": "restaurant",
//     "data": {
//       "type": "F",
//       "id": "322324",
//       "name": "Biryani Blues",
//       "uuid": "39978f7d-442b-4e07-ab4c-71fcc52021e3",
//       "city": "10459",
//       "area": "Sector 72",
//       "totalRatingsString": "5000+ ratings",
//       "cloudinaryImageId": "aid8xbkoxozzaxje8hap",
//       "cuisines": [
//         "Biryani",
//         "Hyderabadi",
//         "Lucknowi",
//         "Kebabs",
//         "Desserts",
//         "Beverages"
//       ],
//       "tags": [
        
//       ],
//       "costForTwo": 40000,
//       "costForTwoString": "₹400 FOR TWO",
//       "deliveryTime": 35,
//       "minDeliveryTime": 35,
//       "maxDeliveryTime": 35,
//       "slaString": "35 MINS",
//       "lastMileTravel": 5,
//       "slugs": {
//         "restaurant": "biryani-blues-sector-50-sector-50",
//         "city": "noida-1"
//       },
//       "cityState": "10459",
//       "address": "Shop no. 4, Ground Floor, Sunder Farm House  & Shopping Complex, Sarafabad Village, Noida Sector -73",
//       "locality": "Sarfabad",
//       "parentId": 13813,
//       "unserviceable": false,
//       "veg": false,
//       "select": false,
//       "favorite": false,
//       "tradeCampaignHeaders": [
        
//       ],
//       "ribbon": [
//         {
//           "type": "PROMOTED"
//         }
//       ],
//       "chain": [
        
//       ],
//       "feeDetails": {
//         "fees": [
//           {
//             "name": "distance",
//             "fee": 5400,
//             "message": ""
//           },
//           {
//             "name": "time",
//             "fee": 0,
//             "message": ""
//           },
//           {
//             "name": "special",
//             "fee": 0,
//             "message": ""
//           }
//         ],
//         "totalFees": 5400,
//         "message": "",
//         "title": "Delivery Charge",
//         "amount": "5400",
//         "icon": ""
//       },
//       "availability": {
//         "opened": true,
//         "nextOpenMessage": "",
//         "nextCloseMessage": ""
//       },
//       "longDistanceEnabled": 0,
//       "rainMode": "NONE",
//       "thirdPartyAddress": false,
//       "thirdPartyVendor": "",
//       "adTrackingID": "cid=7025858~p=1~eid=00000188-a130-3092-0cff-4b3b0067010f",
//       "badges": {
//         "imageBased": [
          
//         ],
//         "textBased": [
          
//         ],
//         "textExtendedBadges": [
          
//         ]
//       },
//       "lastMileTravelString": "5 kms",
//       "hasSurge": false,
//       "aggregatedDiscountInfoV3": {
//         "header": "₹125 OFF",
//         "subHeader": "ABOVE ₹249",
//         "discountTag": "FLAT DEAL",
//         "headerTypeV2": 0
//       },
//       "sla": {
//         "restaurantId": "322324",
//         "deliveryTime": 35,
//         "minDeliveryTime": 35,
//         "maxDeliveryTime": 35,
//         "lastMileTravel": 5,
//         "lastMileDistance": 0,
//         "serviceability": "SERVICEABLE",
//         "rainMode": "NONE",
//         "longDistance": "NOT_LONG_DISTANCE",
//         "preferentialService": false,
//         "iconType": "EMPTY"
//       },
//       "promoted": true,
//       "avgRating": "3.9",
//       "totalRatings": 5000,
//       "new": false
//     },
//     "subtype": "basic"
//   };
// ----------------------------

const restList =   [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "663618",
        "name": "Burgerama",
        "uuid": "8d516d2c-e85a-4838-918a-781d29b4ba48",
        "city": "10459",
        "area": "Indirapuram",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "447000031123d5d8afe27ce7ed6ad556",
        "cuisines": [
          "Burgers",
          "American",
          "Beverages",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 70000,
        "costForTwoString": "₹700 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "burgerama-indirapuram-indirapuram",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "Shop No F-18, First Floor, Sunder Market-2, Vill-Sarfabad, Sector 73 Noida.- 201304 Gautam Budh nagar  (UP)",
        "locality": "",
        "parentId": 8993,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7018558~p=1~eid=00000188-a535-81dd-0f1a-8df700850103",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "663618",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "593860",
        "name": "Cheesecakes By CakeZone",
        "uuid": "7e4e0b9b-fc0f-47c6-a87d-716731cfe3af",
        "city": "10459",
        "area": "Sector 64",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "41ed60ce5ed96b212bdf9c45a09b7e92",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "cheesecakes-by-cakezone-sector-64-sector-64",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "C-86, FIRST FLOOR, SECTOR-63 NOIDA, GAUTAM BUDDHA NAGAR, NOIDA CITY ZONE-1, Gautam Buddha Nagar , Uttar Pradesh-201301",
        "locality": "C Block",
        "parentId": 348057,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "593860",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "681279",
        "name": "GLOBO Ice Creams Of The World",
        "uuid": "3c9ed918-ca7c-48f3-b77c-3e78edb613e0",
        "city": "10459",
        "area": "Sector 60",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "6a6aa5b55c2494fe25380dcd71dd54b9",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 13,
        "maxDeliveryTime": 23,
        "slaString": "13-23 MINS",
        "lastMileTravel": 2.799999952316284,
        "slugs": {
          "restaurant": "globo-ice-creams-of-the-world-new-mamura-sector-50",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "GROUND FLOOR, PLOT NO. 4, VILLAGE MAMURA, SECTOR 66, GAUTAM BUDH NAGAR,NOIDA, Gautam Buddha Nagar,Uttar Pradesh-201301",
        "locality": "Mamura",
        "parentId": 22303,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "681279",
          "deliveryTime": 18,
          "minDeliveryTime": 13,
          "maxDeliveryTime": 23,
          "lastMileTravel": 2.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "67334",
        "name": "Flower and Cake",
        "uuid": "73c83cfd-c609-477f-ac42-2b0516c99fa9",
        "city": "24",
        "area": "Gaur City 1",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "bkxvfyf3sqdpc4kbiudq",
        "cuisines": [
          "Bakery",
          "Snacks",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 7.300000190734863,
        "slugs": {
          "restaurant": "flower-and-cake-crossing-republik-crossing-republik",
          "city": "noida"
        },
        "cityState": "24",
        "address": "Third floor, 311, city plaza, Gaur City 1, noida extention",
        "locality": "Sector 4",
        "parentId": 13707,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6974019~p=4~eid=00000188-a535-81dd-0f1a-8df800850410",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "67334",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "lastMileTravel": 7.300000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "579098",
        "name": "Canteen Central-Chai, Maggi aur Snacks",
        "uuid": "390aaa07-0545-4e63-834a-dfb25c7e72ff",
        "city": "10459",
        "area": "Sector 65",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "9ca06743f33d3a940100194672eb23e9",
        "cuisines": [
          "Street Food",
          "Fast Food",
          "North Indian",
          "Italian",
          "Snacks",
          "Burgers",
          "Beverages",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "canteen-central-by-eatfit-sector-63-sector-64",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "C-86, FIRST FLOOR, SECTOR-63 NOIDA, GAUTAM BUDDHA NAGAR, NOIDA CITY ZONE-1, Gautam Buddha Nagar , Uttar Pradesh, 201301",
        "locality": "C Block",
        "parentId": 346157,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "579098",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "66117",
        "name": "Foodiness",
        "uuid": "c3f97157-61ae-4929-9b71-5dc198b33031",
        "city": "10459",
        "area": "Sector 63",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "oddshcgffo1j9fjo16ta",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 18000,
        "costForTwoString": "₹180 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 0.6000000238418579,
        "slugs": {
          "restaurant": "foodiness-knowledge-park-1-greater-noida",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "D-59, SECTOR-63, NOIDA,  Gautam Buddha Nagar , Uttar Pradesh-201301",
        "locality": "D Block",
        "parentId": 13710,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "66117",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 0.6000000238418579,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "648173",
        "name": "The Betel Leaf Co-Originally From Bangalore",
        "uuid": "75e93736-5c72-43b9-bd60-79f03c8b5e05",
        "city": "10459",
        "area": "Gautam Buddha Nagar",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "7100e3b63a4cba3ee6729c76616efbc0",
        "cuisines": [
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 5.800000190734863,
        "slugs": {
          "restaurant": "the-betel-leaf-co-originally-from-bangalore-sector-50-sector-50",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "H-38, Sector-51, Noida, SECTOR-51 NOIDA, NOIDA CITY ZONE-4, Gautam Buddha Nagar , Uttar Pradesh - 201301",
        "locality": "Sector 10",
        "parentId": 353599,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7071196~p=7~eid=00000188-a535-81dd-0f1a-8df900850723",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "648173",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 5.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "180174",
        "name": "Khan Biryani Center",
        "uuid": "58d02a54-60ae-4f12-ae4c-bf71da4e75ae",
        "city": "10459",
        "area": "Sector 65",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "yvdkbhqffbncmetzz4k2",
        "cuisines": [
          "Mughlai"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
          "restaurant": "khan-biryani-center-sector-64-2",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "SHOP NO 1 GALI NO 2 NEAR KRISHNA PG MAMURA SECTOR 66 NOIDA, District - Gautam Buddha Nagar , STATE - Uttar Pradesh",
        "locality": "Mamura",
        "parentId": 117157,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "180174",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 1.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "593827",
        "name": "The Dessert Heaven - Pure Veg",
        "uuid": "19524520-a610-4cfe-8815-531245d9934a",
        "city": "10459",
        "area": "Sector 64",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "57d363174fa882ae3496151eb229928f",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Sweets",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "the-dessert-heaven---pure-veg-sector-64-sector-64",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "C-86, FIRST FLOOR, SECTOR-63 NOIDA, GAUTAM BUDDHA NAGAR, NOIDA CITY ZONE-1, Gautam Buddha Nagar , Uttar Pradesh-201301",
        "locality": "C Block",
        "parentId": 350292,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "593827",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "319180",
        "name": "Chacha Soya Chaap",
        "uuid": "eb64aa64-8e2f-4ae2-8340-7d161be27335",
        "city": "10459",
        "area": "Sector 72",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "lris6mdxa25isgkzuvnl",
        "cuisines": [
          "Indian",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "chacha-soya-chaap-sector-50-sector-50",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "Shop - 14&15, first floor, Harishchandra Complex, Near Royal Avenue Apartment Village, Sarfabad, Sector 73 Noida, Noida City Zone-4,Gautam Buddha Nagar(Uttar Pradesh)",
        "locality": "E Block",
        "parentId": 14460,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7067573~p=10~eid=00000188-a535-81dd-0f1a-8dfa00850a78",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "319180",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.6",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "142916",
        "name": "Muradabadi biryani corner",
        "uuid": "30dae877-36c3-4f7a-a599-d426b1fd4b7b",
        "city": "10459",
        "area": "Sector 62",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "lt1qbushdudcyjwa58qx",
        "cuisines": [
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 1.899999976158142,
        "slugs": {
          "restaurant": "muradabadi-biryani-corner-lajpat-nagar",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "Near mother dairy, sector 62 Noida . Pin code-201309.",
        "locality": "Rasoolpur",
        "parentId": 141943,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "142916",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 1.899999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "579099",
        "name": "HRX by EatFit",
        "uuid": "8a814ef4-6792-40fc-bfd1-68fef65c085a",
        "city": "10459",
        "area": "Sector 65",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "zbuontejkdgyngdc4llf",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Keto"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "hrx-by-eatfit-sector-63-sector-64",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "C-86, FIRST FLOOR, SECTOR-63 NOIDA, GAUTAM BUDDHA NAGAR, NOIDA CITY ZONE-1, Gautam Buddha Nagar , Uttar Pradesh, 201301",
        "locality": "C Block",
        "parentId": 335529,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "579099",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "233835",
        "name": "Rollsking",
        "uuid": "43d0fa43-c393-41a2-a345-4e57099a5ccd",
        "city": "10459",
        "area": "Chaukhandi",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "pgjmk9lcaalkc75pig73",
        "cuisines": [
          "North Indian",
          "Fast Food",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 3.5999999046325684,
        "slugs": {
          "restaurant": "rollsking-sector-50-sector-50",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "upper ground floor ugf 07 home 121 sector 121 noida gautam buddha nager utter Pradesh pin 201301",
        "locality": "Sector 121",
        "parentId": 4697,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7020936~p=13~eid=00000188-a535-81dd-0f1a-8dfb00850d72",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "233835",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 3.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "448889",
        "name": "221b Baker Street Sec-63",
        "uuid": "bf93e77a-9e04-4f8a-bc78-ec3d750f77df",
        "city": "10459",
        "area": "Sector 63",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "exora4bjamqnxkk0p62g",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "221b-baker-street-sec-63-sector-64-sector-64",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "VILLAGE CHHIJARSI SECTOR 63 NOIDA, NOIDA CITY ZONE-1, Gautam Buddha Nagar (Uttar Pradesh) -201301",
        "locality": "Chhijaarsi",
        "parentId": 2664,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "448889",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.7",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "579093",
        "name": "Great Indian Khichdi by EatFit",
        "uuid": "0944bbb4-a8d8-4c20-9714-fdad4f9f54db",
        "city": "10459",
        "area": "Sector 63",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "89741ecb1291788f128600a5da5f18b4",
        "cuisines": [
          "Indian",
          "Home Food",
          "Healthy Food",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "great-indian-khichdi-by-eatfit-sector-63-sector-64",
          "city": "noida-1"
        },
        "cityState": "10459",
        "address": "C-86, FIRST FLOOR, SECTOR-63 NOIDA, GAUTAM BUDDHA NAGAR, NOIDA CITY ZONE-1, Gautam Buddha Nagar , Uttar Pradesh, 201301",
        "locality": "C Block",
        "parentId": 319582,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "579093",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    }
  ];


// --------------------------

// CSS Style for React Component: to be passed as JS Object.
const styleCard = {
    backgroundColor : "#f0f0f0",
}
// RestaurantCard:
    // -img
    // -name of Restaurant
    // -Star Rating
    // -Cuisine
    // Delivery time

// const RestaurantCard = ({resName,cuisine,rating,deliveryTime}) =>{ // Using Props here
//     console.log(resName,cuisine,rating,deliveryTime) //Using Props Below
//     return (
//         <div className = "restaurant-card" style ={styleCard}>
//             <img  className = "res-logo" alt="Image Not Loaded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg"></img>
//             <h3>{resName}</h3>
//             <h4>{cuisine} </h4>
//             <h4>{rating}</h4>
//             <h4>{deliveryTime} </h4>
//             <h4>{dataJSON.type} </h4>
//             <h4>{dataJSON.food} </h4>
            
//         </div>
//     )
// }


// --------------------------
// Footer:
    // -Copyright
    // -Links
    // -Address
    // -Contact

const Footer = () =>{
    return (
        <div className="footer">
            <div className="copyright">Copyright</div>
            <div className="links">Links</div>
            <div className="address">Address</div>
            <div className="contact">Address</div>


            

        </div>
    )
}
// --------------------------


    

// -----------------------------------------


// ------------------------
// AppLayoutComponent: Main Application Component which contains everything inside.
const AppLayoutComponent = () =>{

    return (<div className="app">
        <Header/>
        <Outlet/> 
    </div>);

}

//Creating Root
const root = ReactDOM.createRoot(document.getElementById("root"))


// Creating Routing Configuration inside our App.js File 

const appRouter = createBrowserRouter(
  [
  {// "/" --> is the "ROOT" Route
  path:"/",// Defines what happens at path "/"    
  // If path is "/" Load the Main AppLayoutComponent

  element:<AppLayoutComponent/>,
  errorElement: <Error/>,
  children:[  
    {
      path :"/",
      element :<Body/>,

    },
    
    { // We have "/about" and "/contact as childern of our root route ie "/"
    path:"/about", 
    element:<About/>}, // Child of "AppLayoutComponent"

    {
      path:"/contact", 
      element:<Contact/>},

    {
      path:"/restaurants/:resID",  // Dynamic Path
      element:<RestaurantMenu/>},
    
    ],// Child of "AppLayoutComponent"

}, 


  
  ]
)

// Rendering to root
root.render(<RouterProvider router={appRouter}/>) 


export default styleCard