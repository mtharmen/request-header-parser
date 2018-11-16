# API Project: Request Header Parser Microservice
## User Story:
1. I can get the IP address, preferred languages (from header Accept-Language)
and system infos (from header User-Agent) for my device.
### Example Usage:
```text
/api/whoami
```
### Example Output:
```js
{"ipaddress":"192.168.2.1","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
```
