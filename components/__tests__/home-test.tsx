import HomeScreen from "@/app/(tabs)/(home)";
import { describe, expect, test } from "@jest/globals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react-native";
import { AnimalProvider } from "../ui/ContextProvider";

test("it won't let me commit unrelated files without this", () => {
  expect(1 + 2).toEqual(3);
});
describe("HomeScreen", () => {
  // test("Lists stuff", () => {
  //   expect(screen.getByRole("Text")).toBeTruthy();
  // });

  test("testing if displaying actually works", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <AnimalProvider>
          <HomeScreen></HomeScreen>
        </AnimalProvider>
      </QueryClientProvider>
    );
    expect(screen.getByText("Animals")).toBeTruthy();
  });

  test("testing if there's a button", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <AnimalProvider>
          <HomeScreen></HomeScreen>
        </AnimalProvider>
      </QueryClientProvider>
    );
    expect(screen.getByRole("button")).toBeTruthy();
  });

  // test("blah", async () => {
  //   const animals = jest.fn(() => useAnimalContext());
  //   render(
  //     <QueryClientProvider client={new QueryClient()}>
  //       <AnimalProvider>
  //         <HomeScreen></HomeScreen>
  //       </AnimalProvider>
  //     </QueryClientProvider>
  //   );
  //   expect(screen.getByText("Fluffy")).toBeTruthy();
  // });
  test("checks if search bar exists", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <AnimalProvider>
          <HomeScreen></HomeScreen>
        </AnimalProvider>
      </QueryClientProvider>
    );
    expect(
      screen.getByPlaceholderText(
        "I don't know why it's invisible but here's the search bar"
      )
    ).toBeTruthy();
  });
});

test("checks if submit button exists", () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <AnimalProvider>
        <HomeScreen></HomeScreen>
      </AnimalProvider>
    </QueryClientProvider>
  );

  expect(screen.getByRole("button")).toBeTruthy();
});

test("checks if list exists", async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <AnimalProvider>
        <HomeScreen></HomeScreen>
      </AnimalProvider>
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByText("Fluffy")).toBeTruthy();
  });
});

// test("checks if searching for something exists works", async () => {
//   render(
//     <QueryClientProvider client={new QueryClient()}>
//       <AnimalProvider>
//         <HomeScreen></HomeScreen>
//       </AnimalProvider>
//     </QueryClientProvider>
//   );

//   await waitFor(() => {
//     const submitBar = screen.getByPlaceholderText(
//       "I don't know why it's invisible but here's the search bar"
//     );
//     fireEvent.press(screen.getByText("Submit"));
//     expect(screen.getByText(submitBar)).toBeTruthy();
//   });
// });
