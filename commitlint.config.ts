module.exports = {
  extends: [],
  rules: {
    'type-enum': [0],
    'header-max-length': [2, 'always', 72],
    'subject-empty': [0],
    'custom-format': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'custom-format': ({ header }: { header: string }) => {
          const regex = /^(\[SE-\d{1,}\] -) (.+)$/;
          const match = header.match(regex);

          if (!match) {
            return [false, 'Header format must be like "[SE-01] - Subject"'];
          }

          const subject = match[2];

          if (!subject || subject.trim().length < 10) {
            return [false, 'Subject may not be less than 10 characters '];
          }

          return [true];
        },
      },
    },
  ],
};
