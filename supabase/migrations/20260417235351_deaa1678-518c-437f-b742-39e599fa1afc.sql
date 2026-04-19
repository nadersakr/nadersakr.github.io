-- Add script column to generated_images and create storage bucket
ALTER TABLE public.generated_images ADD COLUMN IF NOT EXISTS script TEXT;
ALTER TABLE public.generated_images ADD COLUMN IF NOT EXISTS sort_order INTEGER NOT NULL DEFAULT 0;

-- Create storage bucket for generated slide images
INSERT INTO storage.buckets (id, name, public)
VALUES ('generated-slides', 'generated-slides', true)
ON CONFLICT (id) DO NOTHING;

-- RLS policies for generated-slides bucket
CREATE POLICY "Generated slides are publicly viewable"
ON storage.objects FOR SELECT
USING (bucket_id = 'generated-slides');

CREATE POLICY "Users can upload their own generated slides"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'generated-slides' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own generated slides"
ON storage.objects FOR UPDATE
USING (bucket_id = 'generated-slides' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own generated slides"
ON storage.objects FOR DELETE
USING (bucket_id = 'generated-slides' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Add RLS so users can manage their generated images via project ownership
DROP POLICY IF EXISTS "Users can view their generated images" ON public.generated_images;
DROP POLICY IF EXISTS "Users can insert their generated images" ON public.generated_images;
DROP POLICY IF EXISTS "Users can update their generated images" ON public.generated_images;
DROP POLICY IF EXISTS "Users can delete their generated images" ON public.generated_images;

CREATE POLICY "Users can view their generated images"
ON public.generated_images FOR SELECT
USING (EXISTS (SELECT 1 FROM public.projects p WHERE p.id = generated_images.project_id AND p.user_id = auth.uid()));

CREATE POLICY "Users can insert their generated images"
ON public.generated_images FOR INSERT
WITH CHECK (EXISTS (SELECT 1 FROM public.projects p WHERE p.id = generated_images.project_id AND p.user_id = auth.uid()));

CREATE POLICY "Users can update their generated images"
ON public.generated_images FOR UPDATE
USING (EXISTS (SELECT 1 FROM public.projects p WHERE p.id = generated_images.project_id AND p.user_id = auth.uid()));

CREATE POLICY "Users can delete their generated images"
ON public.generated_images FOR DELETE
USING (EXISTS (SELECT 1 FROM public.projects p WHERE p.id = generated_images.project_id AND p.user_id = auth.uid()));