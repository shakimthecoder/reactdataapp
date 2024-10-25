import React from 'react';
import { Vehicle } from './models';
import { faker } from '@faker-js/faker';
import './App.css';

export default (vehicle: Vehicle) => (
    <ul className="vh-item">
    <li>
    <h4>{faker.vehicle.manufacturer()}</h4>
    <h4>{faker.vehicle.color()}</h4>
    <h4>{faker.vehicle.vehicle()}</h4>
    <h4>{faker.vehicle.vin()}</h4>
    <h4>{faker.vehicle.vrm()}</h4>
    </li>
    </ul>
);