module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator('components', {
    description: 'Create a component.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
