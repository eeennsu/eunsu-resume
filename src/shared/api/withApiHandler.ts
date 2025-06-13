import { NextResponse } from 'next/server';

const withApiHandler = <T extends (...args: any[]) => Promise<any>>(request: T) => {
  return async (...params: Parameters<T>) => {
    try {
      const result = await request(...params);

      return result;
    } catch (error) {
      console.log(error);

      return NextResponse.json(
        { error: (error as Error)?.message || 'unknown error' },
        { status: 500 },
      );
    }
  };
};

export default withApiHandler;
