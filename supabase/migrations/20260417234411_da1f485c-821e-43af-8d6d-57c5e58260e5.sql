-- Create storage buckets for project logos and feature screenshots
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-logos', 'project-logos', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('feature-screenshots', 'feature-screenshots', true)
ON CONFLICT (id) DO NOTHING;

-- RLS policies: project-logos
CREATE POLICY "Project logos are publicly viewable"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-logos');

CREATE POLICY "Users can upload their own project logos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'project-logos' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own project logos"
ON storage.objects FOR UPDATE
USING (bucket_id = 'project-logos' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own project logos"
ON storage.objects FOR DELETE
USING (bucket_id = 'project-logos' AND auth.uid()::text = (storage.foldername(name))[1]);

-- RLS policies: feature-screenshots
CREATE POLICY "Feature screenshots are publicly viewable"
ON storage.objects FOR SELECT
USING (bucket_id = 'feature-screenshots');

CREATE POLICY "Users can upload their own feature screenshots"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'feature-screenshots' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own feature screenshots"
ON storage.objects FOR UPDATE
USING (bucket_id = 'feature-screenshots' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own feature screenshots"
ON storage.objects FOR DELETE
USING (bucket_id = 'feature-screenshots' AND auth.uid()::text = (storage.foldername(name))[1]);