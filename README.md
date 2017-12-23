# mcfunction

Language support for mcfunction (17w50a)

## Features

- IntelliSense

  ![intellisense](https://raw.githubusercontent.com/intsuc/mcfunction-ss/master/images/intellisense.png)

- Syntax Highlighting

  ![syntax_highlighting](https://raw.githubusercontent.com/intsuc/mcfunction-ss/master/images/syntax_highlight.png)

- Smart Usage

  ![smart_usage](https://raw.githubusercontent.com/intsuc/mcfunction-ss/master/images/smart_usage.png)

- Access modifiers

  ![access_modifiers](https://raw.githubusercontent.com/intsuc/mcfunction-ss/master/images/access_modifiers.png)

----------

## Access modifiers

You can declare accessibility levels for functions to add the access modifier on the first line in a function.

| Modifier    | Meaning                                    |
| :---------- | :----------------------------------------- |
| `#public`   | Access is not restricted (default).        |
| `#internal` | Access is limited to the current datapack. |
| `#private`  | Access is limited to the current function. |