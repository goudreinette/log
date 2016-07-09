import express from 'express'
import {sendClient} from './source/controller'

const app = express()


app
	// Client
	.get('/', sendClient)

	// API
	.listen(3000, () => console.log('listening on port 3000'))