import { createAbby } from '@tryabby/next';

export const { useAbby, AbbyProvider, useFeatureFlag, withAbby } = createAbby({
  projectId: 'clbgjnsjd0000pxfntj96d9my',
  environments: ['development'],
  currentEnvironment: 'development',
  tests: {
    footer: {
      variants: ['A', 'B'],
    },
  },
  flags: ['showFooter'],
});