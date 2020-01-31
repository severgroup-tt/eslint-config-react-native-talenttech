# eslint-config-react-native-talenttech
[![npm version](https://badge.fury.io/js/eslint-config-react-native-talenttech.svg)](https://badge.fury.io/js/eslint-config-react-native-talenttech)

Конфиг для ESLint в React Native проектах

### Установить [ESLint](https://eslint.org):
    yarn add eslint --dev
    
### Установить [Prettier](https://prettier.io):
    yarn add prettier --dev --exact
    # or globally
    yarn global add prettier

### Добавить в package.json, в раздел scripts:
    "lint": "eslint ./src --ext .js,.jsx,.ts,.tsx",
    "lint-fix": "eslint --fix ./src --ext .js,.jsx,.ts,.tsx",
    "prettier": "npx prettier --write src/**/*.{js,jsx,ts,tsx,json}"

### Создать файл .eslintrc и добавить в него:
```
{
  "extends": "react-native-talenttech"
}
```

### Для запуска линтера/исправлений:
    yarn run lint
    yarn run lint-fix

### Pre-commit hooks:
> - Установить `yarn add --dev husky`
> - Выполнить `yarn add --dev pretty-quick`
> - Добавить в package.json блок:
> ```
> "husky": {
>    "hooks": {
>      "pre-commit": "pretty-quick --staged && yarn lint-fix && yarn lint"
>    }
>  }
> ```
