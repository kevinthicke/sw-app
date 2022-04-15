# Imperial Destroyer center App

Imperial Destroyer Center App is a SPA where you can all the Star Wars data you have ever wanted: Planets, Spaceships, Vehicles, People, Films and Species.

## Stripts

```bash
$> npm i
$> npm run start
```

## Architecture
### Core Layer

- ✔️ Agnostic to React Framework
- ✔️ Implemented following Hexagonal Architectural approach
- ✔️ ObjectMother pattern for mock
- ✔️ Use on an Error notifier (see `handleErrorUsecase` and its dependencies)
    
> 📝 *Future work:*
> - Use absolute routes for modules import
> - Improve React performance with: _useMemo_ and _useCallback_ hook, dynamic component imports,  lazy loading for images.
> - Add a library for _Inversion of Control_ like [InversifyJS](https://inversify.io/)
> - Use _Either Monad_ correctly for Error Handing.
> - Implement CQRS Command Query Responsibility Segregation (?)

### UI Layer

#### Components
- ✔️ Framework dependent: React
- ✔️ Use of [Atomic Design](https://www.uifrommars.com/atomic-design-ventajas/) for component system.
- ✔️ Use [Dan Abramov's Presentational and Containers components pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) 
- ✔️ Custom React Hooks (see `useConsumeUsecase.ts` for consuming use cases of the core layer or `usePagination` for pagination)
- ✔️ Special attention to HTML semantic (correct roles, aria labels, etc)
#### Error handling
- ✔️ Use of a custom _ErrorBoundary_ component for React error handing (see `ErrorBoundary` component)
- ✔️ Use of webp image format when it is possible.
#### Testing 
- ✔️ Use of _Testing Library_ for test the _user interaction_: components with its usecase dependencies. We only mock the infrastructure dependencies (see `StarshipListTest.spec.tsx` for example)
- ✔️ Use of [Arrange-Arc-Assert pattern](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80)
  
#### Styling
- ✔️  SCSS for styling components.
- ✔️ Use of BEM Architecture for CSS
 
> 📝 *Future work*
> - Continue following the [Testing Trophy of Kent C.Dodds](https://kentcdodds.com/blog/write-tests) for testing.
> - Stop splitting components in presentational/containers. This pattern is not a neccessity with the React hooks.
> - Install [Jest Axe](https://github.com/nickcolley/jest-axe) test library as a first glance to work on improve web accesibility.
> - Use jest.mock for mock infrastruture dependencies instead of instanciate a *mock* repository implementation.
