import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import restList from "../utils/mockdata";
import { useState } from "react";
// Body:
    // -Search
    // -Restaurant Container
    // 	->Restaurant Card(Multiple in Number) --> New Reusable component
let listOfRestaurant =[
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
          "avgRating": "4.5",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },

      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "663618",
          "name": "KFC",
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
      }      
            
]
const Body =()=>{

    const  [resList]= useState(listOfRestaurant);




    // State Varibales - Super Powerful Variable
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                    
                    // Filtering out restaurants with avgRating More than 4
                    listOfRestaurant = listOfRestaurant.filter(
                    (res) =>res.data.avgRating>4)

                    console.log(listOfRestaurant)
                    }}>Top Rated Restaurants</button>
            </div>
            {/* <div className="search">Search</div> */}
            <div className="restaurant-container">
     
            {
                listOfRestaurant.map(currentItem =><RestaurantCard key = {currentItem.data.key} resdata = {currentItem}/>)
            }

            </div>
            <Footer/>
        </div>
    )
} 


export default Body