import {
  AlertCircle,
  Check,
  Copy,
  ExternalLink,
  RefreshCw,
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';

export default function TransactionResult({
  metadata,
  onRetry: handleRetry,
}: {
  metadata:
    | {
        [key: string]: unknown;
      }
    | undefined;
  onRetry: () => void;
}) {
  const txId = metadata?.tx as string;
  const poolName = metadata?.poolName as string;
  const amount = metadata?.amount as number;
  const state = metadata?.status as string;

  const [copied, setCopied] = useState(false);
  const [retrying, setRetrying] = useState(false);

  const status = useMemo(() => {
    if (!retrying) return state;
    else return 'retrying';
  }, [state, retrying]);

  const handleCopyTxId = () => {
    navigator.clipboard.writeText(txId);
    setCopied(true);
    toast.success('Transaction ID has been copied to your clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-sm border-0 shadow-lg">
      <CardHeader className="space-y-2 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base font-medium">
              Liquidity Providing
            </CardTitle>
            {status === 'success' ? (
              <Badge variant="success">
                <Check className="mr-1 h-3 w-3" /> Success
              </Badge>
            ) : status === 'retrying' ? (
              <Badge variant="secondary">
                <Check className="mr-1 h-3 w-3" /> Retry
              </Badge>
            ) : (
              <Badge variant="destructive">
                <Check className="mr-1 h-3 w-3" /> Fail
              </Badge>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1 text-xs"
            onClick={() =>
              window.open(`https://explorer.solana.com/tx/${txId}`)
            }
          >
            View <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
        <div className="text-muted-foreground flex items-center gap-2 pb-2 text-sm">
          <span className="truncate">Tx: {txId}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={handleCopyTxId}
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      </CardHeader>
      {status === 'success' && (
        <div className="px-6 pb-6">
          <div className="space-y-6">
            <div>
              <div className="mb-2">Pool</div>
              <div className="text-2xl font-bold">{poolName}</div>
            </div>
            <div>
              <p className="mb-2">Amount</p>
              <p className="text-2xl font-bold">
                {amount.toLocaleString('en-US', {
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      )}
      {status !== 'success' && (
        <>
          <CardContent className="pt-0 pb-2">
            <Alert variant="destructive" className="mt-2">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Transaction Failed</AlertTitle>
              <AlertDescription>
                The network is congested. Please try again.
              </AlertDescription>
            </Alert>
          </CardContent>
          {!retrying && (
            <CardFooter className="flex justify-end gap-2 pt-0">
              <Button
                onClick={() => {
                  setRetrying(true);
                  handleRetry();
                }}
                className="flex-1"
              >
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retry Transaction
                </>
              </Button>
            </CardFooter>
          )}
        </>
      )}
    </Card>
  );
}
