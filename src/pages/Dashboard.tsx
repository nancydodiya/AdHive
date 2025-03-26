
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  // This would typically fetch the user data from a backend
  const [userName] = useState("User");
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {userName}!</h1>
          <p className="text-muted-foreground mt-2">
            Here's an overview of your account and activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Campaigns</CardTitle>
              <CardDescription>Your currently active ad campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Requests</CardTitle>
              <CardDescription>Requests awaiting approval</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Requests</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total Spend</CardTitle>
              <CardDescription>Your total advertising spend</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$0</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Transactions</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks you might want to perform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button>Create New Campaign</Button>
                <Button variant="outline">View Analytics</Button>
                <Button variant="outline">Account Settings</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
