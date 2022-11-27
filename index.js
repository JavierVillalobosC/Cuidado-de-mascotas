const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const cuidadorRoutes = require('./routes/cuidadorRoutes');
const ingresoRoutes = require('./routes/ingresoRoutes');
const retiroRoutes = require('./routes/retiroRoutes');
const mascotaRoutes = require('./routes/mascotaRoutes');
const vecinoRoutes = require('./routes/vecinoRoutes');
const fileRoutes = require('./routes/fileRoutes');
const comentarioRoutes = require('./routes/comentarioRoutes')

app.use(cors());
app.use(express.json());
app.options('*', cors());
app.use('/api', cuidadorRoutes);
app.use('/api', retiroRoutes);
app.use('/api', ingresoRoutes);
app.use('/api', mascotaRoutes);
app.use('/api', vecinoRoutes);
app.use('/api', fileRoutes);
app.use('/api', comentarioRoutes);

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to database");
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})