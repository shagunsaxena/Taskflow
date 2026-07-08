// src/features/dev/pages/ComponentPreview.jsx

import { Button, Input, Card } from "../../../components/ui";
import { FiSearch } from "react-icons/fi";

function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-3xl font-bold">
        🎨 TaskFlow Design System
      </h1>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Buttons</h2>

        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="danger">
            Danger
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>

          <Button loading>
            Loading
          </Button>
        </div>

        <Button fullWidth>
          Full Width Button
        </Button>
      </div>

      <div className="space-y-6">
        <h2 className="mt-12 mb-6 text-xl font-semibold">
          Inputs
        </h2>

        <div className="max-w-md space-y-6">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
          />

          <Input
            type="email"
            label="Email"
            placeholder="john@example.com"
            required
          />

          <Input
            type="password"
            label="Password"
            placeholder="••••••••"
          />

          <Input
            label="Search"
            placeholder="Search projects..."
            leftIcon={<FiSearch />}
          />

          <Input
            label="Username"
            error="Username already exists"
          />

          <Input
            label="Project Name"
            helperText="Maximum 50 characters"
          />

          <Input
            label="Disabled"
            disabled
            value="Cannot edit this field"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="mt-12 mb-6 text-2xl font-semibold">
          Cards
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <p>This is a simple card.</p>
          </Card>

          <Card
            title="Project Overview"
            subtitle="Enterprise Dashboard"
          >
            <p>
              This card displays project information.
            </p>
          </Card>

          <Card
            title="Task Summary"
            footerContent={
              <Button size="sm">
                View Details
              </Button>
            }
          >
            <p>Completed: 18</p>
            <p>Pending: 6</p>
          </Card>

          <Card shadow="lg" padding="lg">
            <h3 className="mb-2 text-lg font-semibold">
              Dashboard KPI
            </h3>

            <p className="text-4xl font-bold text-blue-600">
              42
            </p>

            <p className="text-slate-500">
              Active Projects
            </p>
          </Card>
        </div>
      </div>  

    </div>
  );
}

export default DesignSystemPage;