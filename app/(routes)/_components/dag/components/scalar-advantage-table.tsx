import { HTMLAttributes } from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ADVANTAGE_CONTENT } from '@/lib/constants/scalar-advantage-content';
import { cn } from '@/lib/utils';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ScalarAdvantageTable
 * ------------------------------------------------------------------------------------------------------------------ */

const scalarAdvantageTableVariants = cva('');

type ScalarAdvantageTableVariantProps = VariantProps<
  typeof scalarAdvantageTableVariants
>;

type ScalarAdvantageTableProps = ScalarAdvantageTableVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ScalarAdvantageTableVariantProps>;

export function ScalarAdvantageTable({
  className,
  ...props
}: ScalarAdvantageTableProps): React.JSX.Element {
  return (
    <div {...props} className={scalarAdvantageTableVariants({ className })}>
      <Table>
        <TableHeader>
          <TableRow className={'border-none'}>
            <TableHead className="w-[330px] 2xl:w-[384px]"></TableHead>
            {ADVANTAGE_CONTENT.map((item, index) => (
              <TableHead
                className={cn(
                  'pb-6',
                  index === 2 && 'max-2xl:w-[181px] last:pr-0',
                  index === 1 && 'pl-0 pr-8',
                  index === 0 && 'pr-0',
                )}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                <div className={'relative z-0 bg-transparent'}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className={cn(
                      `aspect-[${item.width}/${item.height}]`,
                      index === 1 && 'w-[70%]',
                      index === 0 && 'w-[65%]',
                      index === 2 && 'w-[90%] 2xl:w-[80%] -translate-x-1',
                    )}
                  />
                  {index === 0 && (
                    <div
                      className={
                        'absolute inset-0 w-full h-full mix-blend-luminosity z-10'
                      }
                    ></div>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ADVANTAGE_CONTENT[0].content.map((item, index) => (
            <TableRow
              className={'border-b-[0.2px] border-neutral-8'}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              <TableCell className="font-medium pl-0 text-neutral-6 text-lg 2xl:text-xl">
                {item.title}
              </TableCell>
              {ADVANTAGE_CONTENT.map((item, indexInner) => (
                <TableCell
                  className={cn(
                    'font-medium text-neutral-1 text-lg 2xl:text-xl last:pr-0',
                    indexInner === 1 && 'pl-0 pr-8',
                    indexInner === 0 && 'pr-0',
                  )}
                  // eslint-disable-next-line react/no-array-index-key
                  key={indexInner}
                >
                  {item.content[index].value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
