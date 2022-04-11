export const formatError = (error: any) => {
  const { message } = error;
  let formatMessage = '';
  if (typeof message === 'string') {
    if (message.startsWith('Project not found: ')) {
      delete error.extensions.exception;
      error.extensions.errorCode = 99999;
      formatMessage = '企業IDが正しく無いです';
    } else if (message === 'Forbidden resource') {
      error.extensions.errorCode = 90000;
      formatMessage = '権限がありません';
    } else if (
      ['INTERNAL_SERVER_ERROR', 'GRAPHQL_VALIDATION_FAILED'].includes(
        error?.extensions?.code,
      )
    ) {
      if (message.startsWith('Too many requests,')) {
        formatMessage = message
          .replace(
            'Too many requests, please try again in ',
            'Quá nhiều request, thử lại sau',
          )
          .replace(' seconds.', 'Làm ơn thử lại');
        error.extensions.errorCode = 90002;
      } else {
        formatMessage =
          'An error has occurred Check the help screen for details.';
        error.extensions.errorCode = 90001;
      }
      delete error.extensions.exception;
    } else {
      formatMessage = message;
    }
  } else {
    formatMessage = message.message;
  }
  return {
    ...error,
    message: formatMessage,
  };
};
