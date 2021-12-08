import React, { Component } from 'react';
import { ReactDOM } from 'react';
import { useState } from "react";
import data from "./data/mapdata.json";



class Search extends Component{
    state = {
        search: ""
      };

    searchCity = crop => {
        const { search } = this.state;
        var key = crop.key.toLowerCase();

        return (
            <div className="Search">
              <p className="">
              alt={crop.name}
                  </p>
            </div>
          );
        };
        onchange = event => {
            this.setState({ search: event.target.value });
          };
         
        render() {
            const { search } = this.state;
            const datasearch = data.filter(crop => {
                return data.city;//.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return (
            <div className="Search">
                <input
                  placeholder="Search by crop" 
                  label="Search by crop"
                  icon="search"
                  onChange={this.onchange}
                />
                 <div className="row">
              {datasearch.map(crop => {
                return this.searchCity(crop);
              })}
            </div>
            <p>{this.name}</p>
              
            </div>
          );
        }
      }
        
    
   return (
            <div className="Search">
                <input
                  placeholder="Search by crop" 
                  label="Search by crop"
                  icon="search"
                  onChange={this.onchange}
                />
                 <div className="row">
              {datasearch.map(crop => {
                return this.searchCity(crop);
              })}
            </div>
            <p>{this.name}</p>
              
            </div>
          );
        }
      }



        

export default Search;
