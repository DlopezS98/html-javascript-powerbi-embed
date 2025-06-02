## Preparar el entorno
- Publica un reporte en Power BI Desktop y súbelo a tu workspace.
- Inciar sesión en Power BI con tu cuenta institucional. [Web](https://app.powerbi.com/)
- Tener acceso a un workspace que no sea el "My Workspace", ya que este no permite generar tokens de embed. Si es necesario:
    - Crea un nuevo workspace.
    - Publica o mueve el reporte a este nuevo workspace.

### Obtener embedUrl y reportId
Ve a la documentación de Power BI REST API:
👉 Get Report in Group [(Docs)](https://learn.microsoft.com/en-us/rest/api/power-bi/reports/get-report-in-group)

- Haz clic en el botón "Try It".
- Inicia sesión con tu cuenta de Microsoft si es necesario.

Obtener los siguientes datos:
- Group ID (workspace): lo ves en la URL al entrar al workspace.
- Report ID: también visible en la URL al visualizar un reporte.

Ejemplo de URL de Power BI:
https://app.powerbi.com/groups/{groupId}/reports/{reportId}

- Ejecuta la llamada GET con el groupId y reportId.
- Del JSON de respuesta, copia el campo embedUrl.

### Obtener un access token temporal (solo para pruebas)
- Abre el reporte desde Power BI Web.
- Abre las herramientas de desarrollo (Dev Tools) en el navegador.
- Ejecuta este comando en la consola para obtener el token:
```javascript
copy(powerBiAccessToken)
```

## Obtener un embed token (recomendado para producción)
Este token es de tipo (Aad) y es temporal, por lo que no es adecuado para producción.
Tipos de tokens:
- Aad (Azure Active Directory)
- Embed (para usuarios sin cuenta de Power BI, usado en aplicaciones productivas con Power BI Embedded)

### Generar un embed token (recomendado para producción)
- Usa la API de Power BI para generar un embed token: [Power BI REST API](https://learn.microsoft.com/en-us/rest/api/power-bi/embed-token/reports-generate-token-in-group#code-try-0)
- En el cuerpo de la solicitud, incluye:
```json
{
  "accessLevel": "View"
}
```
- Obtendrás un objeto JSON con el campo "token" el cual es el embed token que necesitas.

## Estructura del proyecto
```plaintext
index.html => Página principal que carga el reporte de Power BI.
index.js => Archivo JavaScript que contiene la lógica para incrustar el reporte.
environment.mjs => Archivo de configuración con las variables de entorno.
powerbi.min.js => Biblioteca de Power BI para incrustar reportes.
```

## Configurar el proyecto
Para configuirar el proyecto deberás configurar el archivo `environment.mjs` con los datos obtenidos anteriormente.

Para usar un token temporal (Aad), descomenta la línea de código en `environment.mjs` que dice `TOKEN_TYPE: models.TokenType.Add` y comenta la línea que dice `TOKEN_TYPE: models.TokenType.Embed`.
Por defecto está configurado para usar un token de tipo Embed.

## Reporte
![Reporte de Power BI](./assets/Screenshot%202025-06-02%20at%2011.46.11 AM.png)

## Referencias
- [Documentación de Power BI REST API](https://learn.microsoft.com/en-us/rest/api/power-bi/)
- [Power BI Playground](https://playground.powerbi.com/)