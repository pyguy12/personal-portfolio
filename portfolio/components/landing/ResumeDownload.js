import React from 'react';
import { FileText } from 'lucide-react';

const ResumeDownload = () => {
    return (
        <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg border border-slate-200">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-medium text-slate-900">My Resume</h3>
                        <p className="text-sm text-slate-500">Get a detailed overview of my experience</p>
                    </div>
                </div>
                <a
                    href="/Warren_Wu_Resume.pdf"
                    download
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Download PDF
                </a>
            </div>
        </div>
    );
};

export default ResumeDownload;
