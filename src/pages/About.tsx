import { useQueryClient, useQuery, useMutation } from "react-query";

import Greetings from "@components/Greetings";

// Local Store
let counter = 0;

const About = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery("count", () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ count: counter });
      }, 1000);
    });
  }) as any;
  const { mutate } = useMutation(
    (n: number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          counter = n;
          resolve({ count: n });
        }, 1000);
      });
    },
    { onSuccess: () => queryClient.invalidateQueries("count") }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  console.log(data);

  return (
    <div>
      <Greetings pageName="About" />
      <p>{data.count}</p>
      <button onClick={() => mutate(data.count + 1)}>Increment</button>
    </div>
  );
};

export default About;
