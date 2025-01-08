import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TestTailwindWithShadcn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans">
      <h1 className="text-4xl font-bold mb-6">ShadCN Components Test Page</h1>

      {/* Card Example */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Card Example</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is an example of a card using ShadCN components.</p>
        </CardContent>
      </Card>

      {/* Button Examples */}
      <div className="flex gap-4 mb-4">
        <Button variant="default">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>

      {/* Text Examples */}
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-muted-foreground">Muted text example</p>
        <p className="text-accent">Accent text example</p>
      </div>

      {/* Animated Component */}
      <div className="animate-pulse bg-muted text-muted-foreground p-4 rounded-md">
        <p>
          This is an animated example using the &quot;pulse&quot; animation.
        </p>
      </div>

      {/* Border Radius Examples */}
      <div className="flex gap-4 mt-6">
        <div className="bg-primary text-primary-foreground p-4 rounded-sm">
          Small Radius
        </div>
        <div className="bg-secondary text-secondary-foreground p-4 rounded-md">
          Medium Radius
        </div>
        <div className="bg-accent text-accent-foreground p-4 rounded-lg">
          Large Radius
        </div>
      </div>

      {/* Chart Colors */}
      {/* <div className="mt-6 grid grid-cols-5 gap-2">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className={`h-10 w-10 rounded-full`}
            style={{ backgroundColor: `hsl(var(--chart-${i + 1}))` }}
          ></div>
        ))}
      </div> */}

      {/* Dark Mode Toggle */}
      <div className="mt-8">
        <p>
          Toggle dark mode by adding <code>class=&quot;dark&quot;</code> to the
          root element.
        </p>
      </div>
    </div>
  );
};

export default TestTailwindWithShadcn;
