
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Transactions = () => {
  // This would typically fetch transaction data from a backend
  const transactions = [];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-4 text-primary hover:bg-pastel-purple/10">
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Transaction History</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-pastel-purple/10">
          <Table>
            <TableCaption>
              {transactions.length === 0 ? (
                "You don't have any transactions yet."
              ) : (
                "A list of your advertising spend transactions."
              )}
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-pastel-gray/20 hover:bg-pastel-gray/30">
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Campaign</TableHead>
                <TableHead>Amount (₹)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Receipt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <p className="text-muted-foreground mb-4">No transactions found</p>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link to="/new-campaign">Create Your First Campaign</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    {/* Transaction data would be displayed here */}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
