import { Metadata } from "next";
import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { FormattedCustomersTable } from "@/app/lib/definitions";
export const metadata: Metadata = {
  title: "Customers",
};

export default async function CustomersPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const customers : FormattedCustomersTable[] = await fetchFilteredCustomers(query);
  return (
    <div>
      <CustomersTable customers={customers} />
    </div>
  );
}
