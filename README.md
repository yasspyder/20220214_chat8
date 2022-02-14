# Questions

1. что такое redux - стейт менеджер (стм) библиотека для управления глобальным состоянием (пропс дриллинг)

2. что такое action - действие (для передачи в диспетчер) для описния того что нужно сделать
   обьект, с полями:
   type - название (тип) действия
   payload - доп параметры (полезная нагрузка) // {}, [], false, "", number

3. что такое action creator - функция, которая возвращает action

4. что такое reducer (чистая функция) - обработчик действий, функция, принимает два параметра (state, action)
   обновляет состояние на основании переданного типа
   нельзя в редюсере - мутации, сайд эффеекты

5. из чего состоит обьект store
   getState - для получения текущего состояние
   dispatch - передача action в reducer
   subscribe - подписка на изменения состояния

6. useSelector
7. useDispatch
8. combineReducers

9. Способы оптимизации селекторов

- обьявление селектора снаружи компонента (вынос селектора в отдельный файл store/feature/selectors.js)
- использование useMemo/useCallback
  ; const getConversations = useMemo(
  ; () => conversationsSelector(someProp),
  ; [someProp]
  ; );

  ; // @TODO для примера на уроке
  ; const conversations = useSelector(getConversations);

- useSelector(selector, shallowEqual/deepEqual/ (next, prev) => next === prev)
- reselect

  10.thunk = () => () => {}
  dispatch(thunk())

# middleware

const action = () => ({})

const reducer = () => {}

dispatch(action()) ==> reducer()

middleware1 // запрос на сервер
middleware2 // логирование
middleware3 // обработка ошибки

dispatch(action()) ==> middleware1() => middleware2() => middleware3() ==> reducer(action)
