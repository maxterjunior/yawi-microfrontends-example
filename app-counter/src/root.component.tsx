import { useState } from "react";

import { Button, Statistic } from "antd"

export default function Root(props) {
  const [count, setCount] = useState(0);
  return (
    <div>

      <Statistic title="Counter" value={count} />

      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}
