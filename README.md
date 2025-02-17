# local-iso-timestamp

A simple utility to get the current local date and time in ISO format with timezone offset.

## Installation

```bash
npm install local-iso-timestamp
```

## Usage
### JavaScript
```javascript
const { getLocalIsoTimestamp } = require('local-iso-timestamp');
console.log(getLocalIsoTimestamp());
// Output: 2024-10-12T22:15:16.521+13:00

const date = new Date('2023-10-12T22:15:16.521Z');
console.log(getLocalIsoTimestamp(date));
// Output: 2023-10-12T22:15:16.521+13:00 (depending on your local timezone)
```
### TypeScript
```typescript
import { getLocalIsoTimestamp } from 'local-iso-timestamp';
console.log(getLocalIsoTimestamp());
// Output: 2024-10-12T22:15:16.521+13:00

const date = new Date('2023-10-12T22:15:16.521Z');
console.log(getLocalIsoTimestamp(date));
// Output: 2023-10-12T22:15:16.521+13:00 (depending on your local timezone)
```

## Source
[GitHub](https://github.com/below43/local-iso-timestamp)

## License
[MIT License](/LICENSE)
