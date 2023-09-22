
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const storeApi = createApi({
  tagTypes: ["suggestions"],
  reducerPath: "suggestionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "api/books",
    }),
    getMovies: builder.query({
      query: () => "api/movies",
    }),
    getBookById: builder.query({
      query: (id) => `api/books/${id}`,
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `api/books/${id}`,
        method: "DELETE",
      }),
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: "api/books",
        method: "POST",
        body: body,
      }),
    }),
    editBook: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `api/books/${id}`,
          method: "PUT",
          body,
        };
      },
    }),
  }),
});




export const {
  useEditBookMutation,
  useAddBookMutation,
  useDeleteBookMutation,
  useGetBooksQuery,
  useGetBookByIdQuery,
  useGetMoviesQuery

} = storeApi;
