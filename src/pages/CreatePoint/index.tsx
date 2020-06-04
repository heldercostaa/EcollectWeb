import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

const CreatePoint: React.FC = () => {

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('items').then(res => {
      setItems(res.data);
    });
  }, []);

  return (
    <div id="page-create-point">
      <header>
        <div id="logo">
          <img src={logo} alt="E-collect" />
          <h1>E-collect</h1>
        </div>

        <Link to="/">
          <FiArrowLeft />
          Back to Home
        </Link>
      </header>

      <form>
        <h1>Register new <br /> collection point</h1>

        <fieldset>
          <legend>
            <h2>Information</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Organization Name</label>
            <input 
              type="text"
              name="name"
              id="id"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email"
                name="email"
                id="email"
              />
            </div>
            
            <div className="field">
              <label htmlFor="name">Whatsapp</label>
              <input 
                type="text"
                name="whatsapp"
                id="whatsapp"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Address</h2>
            <span>Pin an address on the map</span>
          </legend>

          <Map center={[-3.7928829, -38.4955035]} zoom={15}>
            <TileLayer 
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-3.7928829, -38.4955035]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">State (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Choose a state</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">City</label>
              <select name="city" id="city">
                <option value="0">Choose a city</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Collection Items</h2>
            <span>Select one or more items</span>
          </legend>

          <ul className="items-grid">
            {items.map(item => (
              <li key={item.id}>
                <img src={item.image_url} alt={item.title}/>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>

        <button type="submit">
          Register new point
        </button>
      </form>
    </div>
  );
}

export default CreatePoint;