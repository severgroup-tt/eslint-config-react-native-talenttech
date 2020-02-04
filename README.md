# eslint-config-react-native-talenttech
[![npm version](https://badge.fury.io/js/eslint-config-react-native-talenttech.svg)](https://badge.fury.io/js/eslint-config-react-native-talenttech)

Конфиг для ESLint в React Native проектах

### Установить [ESLint](https://eslint.org):
    yarn add eslint --dev
    
### Установить этот конфиг:
    yarn add eslint-config-react-native-talenttech --dev
    
### Создать файл .eslintrc.js и добавить в него:
```
module.exports = {
  extends: 'react-native-talenttech',
};
```

### Добавить в package.json, в раздел scripts:
    "lint": "eslint ./src --ext .js,.jsx,.ts,.tsx",
    "lint-fix": "eslint --fix ./src --ext .js,.jsx,.ts,.tsx",

### Для запуска линтера/исправлений:
    yarn run lint
    yarn run lint-fix

### Pre-commit hooks:
> - Установить `yarn add --dev husky`
> - Добавить в package.json блок:
> ```
> "husky": {
>    "hooks": {
>      "pre-commit": "yarn lint"
>    }
>  }
> ```
