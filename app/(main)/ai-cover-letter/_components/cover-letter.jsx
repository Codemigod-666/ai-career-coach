import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CoverLetterList from './cover-letter-list'

const CoverLetterPage = () => {
    return (
        <div className='space-y-4'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                <h1 className="text-6xl font-bold gradient-title">My Cover Letters</h1>

                <Link href="/ai-cover-letter/new">
                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create New
                    </Button>
                </Link>
            </div>

            <CoverLetterList />
        </div>
    )
}

export default CoverLetterPage