# Yawi - Microfrontends

## Aplicaciones

- [ ] [Root App]
- [ ] [Store App]
- [ ] [Layer App]
- [ ] [Todo App]
- [ ] [Counter App]
- [ ] [Calculator App]
  
## Comandos
    
- Iniciar aplicación Root

    ```bash
    npx create-single-spa --moduleType root-config --appName root-config --orgName yawi --port 9000
    ```	
- Iniciar aplicación Store

    ```bash
    npx create-single-spa --orgName yawi --port 9001
    ```

    - directory: ./store
    - type: utility module
    - framework: none
    - manage package: pnpm
    - typescript: yes
    - organization name: yawi
    - proyect name: store

- Iniciar aplicación Layer

    ```bash
    npx create-single-spa --moduleType app-parcel --appName layer --orgName yawi --port 9002
    ```
- Iniciar aplicación Menu

    ```bash
    npx create-single-spa --moduleType app-parcel --appName layer --orgName yawi --port 9003
    ```
    - directory: ./menu
    - type: app-parcel
    - framework: react
    - manage package: pnpm
    - typescript: yes
    - organization name: yawi
    - proyect name: menu

- Iniciar aplicación Todo, esta aplicación sera en Angular, para ello una vez instalado en el angular.json, se debe eliminar las siguientes propiedades

    - projects. browser

    ```bash
    npx create-single-spa --moduleType app-parcel --appName todo --orgName yawi --port 9011
    ```

- Iniciar aplicación Counter

    ```bash
    npx create-single-spa --moduleType app-parcel --appName counter --orgName yawi --port 9013
    ```

    - directory: ./app-counter
    - type: app-parcel
    - framework: react
    - manage package: pnpm
    - typescript: yes
    - organization name: yawi
    - proyect name: counter

### Lanzar aplicaciones

```bash
cd root && npm start
```