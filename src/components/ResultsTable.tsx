import { Card } from "@/components/ui/card";

interface ResultsTableProps {
  data: Array<{ method: string; mae: string }>;
  caption: string;
  highlightRow?: number;
}

export const ResultsTable = ({ data, caption, highlightRow }: ResultsTableProps) => {
  return (
    <Card className="mt-4 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <caption className="px-4 pt-4 pb-2 text-xs text-muted-foreground text-left">
            {caption}
          </caption>
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">Method/Company</th>
              <th className="px-4 py-3 text-left font-semibold">MAE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-border last:border-0 transition-colors hover:bg-muted/30 ${
                  index === highlightRow ? "bg-accent/10 font-semibold" : ""
                }`}
              >
                <td className="px-4 py-3">{row.method}</td>
                <td className="px-4 py-3">{row.mae}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
