import { useApolloClient, useMutation } from "@apollo/client";
// import { TodoFragments } from "./fragments";
import {
  CREATE_CHECKLIST,
  UPDATE_CHECKLIST,
  DELETE_CHECKLIST,
} from "../mutations/checklist";
import { GET_CHECKLISTS } from "../queries";
import type { CreateChecklistInput } from "../../generated/graphql";

export const useCreateChecklist = (input: CreateChecklistInput) => {
  const [createChecklist] = useMutation(CREATE_CHECKLIST, {
    variables: {
      input,
    },
    update(cache, { data: { createChecklist: newChecklist } }) {
      const cachedQuery = cache.readQuery({
        query: GET_CHECKLISTS,
      });
      const { checklists: cachedChecklists } = cachedQuery;
      const checklists = [...cachedChecklists, newChecklist];
      cache.writeQuery({
        query: GET_CHECKLISTS,
        data: { checklists },
      });
    },
  });
  return { createChecklist };
};

// export const useCreateChecklist = ({
//   title,
//   description,
//   completed,
//   priority,
// }) => {
//   // console.log(input);
//   const [createChecklist] = useMutation(CREATE_CHECKLIST, {
//     variables: {
//       input: {
//         title,
//         description,
//         completed,
//         priority,
//       },
//     },
//     update(cache, { data: { createChecklist: newChecklist } }) {
//       const cachedQuery = cache.readQuery({
//         query: GET_ALL,
//       });
//       const { checklists: cachedChecklists } = cachedQuery;
//       const checklists = [...cachedChecklists, newChecklist];
//       cache.writeQuery({
//         query: GET_ALL,
//         data: { checklists },
//       });
//     },
//   });
//   return { createChecklist };
// };

export const useUpdateChecklist = ({
  id,
  title,
  description,
  completed,
  priority,
}) => {
  const [updateChecklist] = useMutation(UPDATE_CHECKLIST, {
    variables: {
      input: {
        id,
        title,
        description,
        completed,
        priority,
      },
    },
  });
  return { updateChecklist };
};

export const useDeleteChecklist = (id) => {
  const [deleteChecklist] = useMutation(DELETE_CHECKLIST, {
    variables: {
      id,
    },
    update(
      cache,
      {
        data: {
          deleteChecklist: { id: removedChecklistId },
        },
      }
    ) {
      const cachedQuery = cache.readQuery({
        query: GET_CHECKLISTS,
      });
      const { checklists: cachedChecklists } = cachedQuery;
      const checklists = cachedChecklists.filter(
        ({ id: _id }) => _id !== removedChecklistId
      );
      cache.writeQuery({
        query: GET_CHECKLISTS,
        data: {
          checklists,
        },
      });
    },
  });
  return { deleteChecklist };
};

export const useReorder = () => {
  const client = useApolloClient();
  function onDragEnd(result: DropResult): void {
    const { source, destination } = result;
    const { todos } = client.readQuery({ query: GET_CHECKLISTS });
    if (!destination) {
      return todos;
    }
    if (source.index === destination.index) {
      return todos;
    }
    const arr = [...todos];
    const [removed] = arr.splice(source.index, 1);
    arr.splice(destination.index, 0, removed);
    client.writeQuery({
      query: GET_CHECKLISTS,
      data: {
        todos: arr,
      },
    });
    return arr;
  }
  return onDragEnd;
};
