# APP Housing Prices

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Here is my APP using React.js which allows the user to estimate the price of their house based on its characteristics.  

## Description  

The objective of this project is mainly GitOps oriented. This project is stored on a Gitlab server that I created with different levels of user management and complete project configuration in order to streamline and secure the creation process. This server has a runner allowing you to carry out numerous automations using pipelines in order to carry out CI/CD of the project.  

[![Vidéo du projet](./documentation/image1.png)](https://www.youtube.com/watch?v=_tmrvwVn-Ps)  

### Project objective: Estimation of house prices

The main objective of this project is to estimate the sale price of houses based on their characteristics, such as surface area, number of rooms, or geographic location. The data used comes from the site [Kaggle](https://www.kaggle.com/datasets/yasserh/housing-prices-dataset/data) and contains a `.csv` file listing detailed characteristics of different houses. These variables include:  

- the price of the house
- the size of the house
- the number of rooms
- the number of bathrooms
- number of floors
- close to a main road
- guest bedroom
- basement
- hot water tank
- air conditioner  

This project aims to explore these variables to understand their impact on price and build a predictive model capable of providing reliable price estimates. With GitLab CI/CD pipelines, the process of model training, validation, and deployment is automated, ensuring efficient management of model releases and updates.  

## Table of Contents

- [Getting Started](#Getting-Started)
- [Launch Application](#Launch-Application)
- [Contributing](#Contributing)
- [License](#License)  

## Getting Started   

```bash
git clone https://github.com/HaDock404/app-housing-prices.git
cd app-housing-prices
npm install
```  

## Launch Application   

```bash
npm start
```  

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License  

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.