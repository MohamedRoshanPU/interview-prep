import React, { useReducer, useState } from "react";

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface InitialState {
  data: Todo[];
}

const initialState: InitialState = {
  data: [],
};

interface AddAction {
  type: "add";
  payload: Todo;
}

interface MarkAsCompleteAction {
  type: "mark_as_complete";
  payload: number;
}
interface DeleteAction {
  type: "delete";
  payload: number;
}

type Action = AddAction | MarkAsCompleteAction | DeleteAction;

const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case "add":
      return { ...state, data: [...state.data, action.payload] };
    case "mark_as_complete":
      return {
        ...state,
        data: state.data.map((todo) => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              isCompleted: true,
            };
          }
          return todo;
        }),
      };
    case "delete":
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const Todo: React.FC = () => {
  const [text, setText] = useState<string>();

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = () => {
    if (!text) return;
    const safeData: Todo = {
      id: state.data.length ? state.data[state.data.length - 1].id + 1 : 1,
      title: text,
      isCompleted: false,
    };
    dispatch({ type: "add", payload: safeData });
    setText("");
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-y-auto">
      <div className="w-xl flex flex-col gap-5 p-3 border rounded-2xl">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="grow border rounded px-1.5 py-2"
          />
          <button
            className="bg-blue-600 text-white rounded-full px-4 py-2"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {state.data?.map((todo) => {
            return (
              <div
                className="w-full border rounded-2xl p-2 flex items-center justify-between"
                key={todo.id}
              >
                <h3
                  className={`grow text-2xl ${todo.isCompleted && "line-through"}`}
                >
                  {todo.title}
                </h3>
                <div className="flex items-center gap-2">
                  {!todo.isCompleted && (
                    <button
                      className="bg-green-600 px-4 py-2 text-xs text-white rounded-full"
                      onClick={() =>
                        dispatch({ type: "mark_as_complete", payload: todo.id })
                      }
                    >
                      Mark as Complete
                    </button>
                  )}
                  <button
                    className="bg-red-600 px-4 py-2 text-xs text-white rounded-full"
                    onClick={() =>
                      dispatch({ type: "delete", payload: todo.id })
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
