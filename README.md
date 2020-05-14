# chrome2gorilla

Exporting passwords from chrome backup to gorilla

## Instalation

Install dependencies

`npm i`

## Usage

Application accept 2 parameters

- First is name of the file (mandatory)

- Second is group where passwords will belong (optional)

Running

`node index.js Passwords.csv`

or

`node index.js Passwords.csv groupName` //allows to name group of passwords with parameter

## Downloading your passwords from your google chrome

chrome://settings/passwords [link](chrome://settings/passwords)

Next to **Saved Passwords** click tripple dot option and select _Export passwords..._
