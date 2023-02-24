import mysql from 'mysql2';
import {database} from '../database/keys.js';
import { createPool } from 'mysql2/promise';

//Init Connection
const pool = createPool(database);

export {pool}