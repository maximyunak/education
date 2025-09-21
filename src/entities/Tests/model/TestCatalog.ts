export interface FetchTestsResponse {
  data: TestPreviewData[];
}

enum TestStatus {
  PUBLISHED = 'PUBLISHED',
  DRAFT = 'DRAFT',
  ARCHIVED = 'ARCHIVED',
}

interface TestPreviewData {
  id: number;
  title: string;
  description: string;
  max_attempts: number;
  passing_score: number;
  duration: number;
  popularity_count: number;
  status: TestStatus;
  author_id: number;
  theme_id: number;
  created_at: string;
  updated_at: string;
}
